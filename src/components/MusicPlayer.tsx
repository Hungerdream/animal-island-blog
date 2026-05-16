import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.less";

interface Song {
    title: string;
    artist: string;
    url: string;
    cover?: string;
}

interface MusicPlayerProps {
    songs?: Song[];
}

const defaultSongs: Song[] = [
    { title: "岛屿之风", artist: "独立游戏OST", url: "", cover: "🎧" },
    { title: "深夜Lo-fi", artist: "Lo-fi Hip Hop", url: "", cover: "🌙" },
    { title: "海边黄昏", artist: "久石让", url: "", cover: "🌅" },
];

function MusicPlayer({ songs = defaultSongs }: MusicPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const currentSong = songs[currentIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        const onEnded = () => handleNext();

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("ended", onEnded);
        };
    }, [currentIndex]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) audio.pause();
        else audio.play().catch(() => {});
        setIsPlaying(!isPlaying);
    };

    const handlePrev = () => {
        setCurrentIndex((i) => (i === 0 ? songs.length - 1 : i - 1));
        setIsPlaying(false);
        setProgress(0);
    };

    const handleNext = () => {
        setCurrentIndex((i) => (i === songs.length - 1 ? 0 : i + 1));
        setIsPlaying(false);
        setProgress(0);
    };

    return (
        <div className={`music-sidebar ${expanded ? "music-sidebar--expanded" : ""}`}>
            <audio ref={audioRef} src={currentSong.url} preload="metadata" />

            <button className="music-sidebar-toggle" onClick={() => setExpanded(!expanded)}>
                {currentSong.cover || "🎵"}
            </button>

            {expanded && (
                <div className="music-sidebar-panel">
                    <div className="music-sidebar-header">
                        <span>小镇电台</span>
                        <button className="music-sidebar-close" onClick={() => setExpanded(false)}>×</button>
                    </div>

                    <div className="music-sidebar-cover">
                        <div className={`music-sidebar-vinyl ${isPlaying ? "spinning" : ""}`}>
                            {currentSong.cover || "🎵"}
                        </div>
                    </div>

                    <div className="music-sidebar-info">
                        <div className="music-sidebar-title">{currentSong.title}</div>
                        <div className="music-sidebar-artist">{currentSong.artist}</div>
                    </div>

                    <div className="music-sidebar-progress" onClick={(e) => {
                        const audio = audioRef.current;
                        if (!audio) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
                    }}>
                        <div className="music-sidebar-progress-bar" style={{ width: `${progress}%` }} />
                    </div>

                    <div className="music-sidebar-controls">
                        <button onClick={handlePrev}>⏮</button>
                        <button className="music-sidebar-play" onClick={togglePlay}>
                            {isPlaying ? "⏸" : "▶"}
                        </button>
                        <button onClick={handleNext}>⏭</button>
                    </div>

                    <div className="music-sidebar-list">
                        {songs.map((song, i) => (
                            <div
                                key={i}
                                className={`music-sidebar-item ${i === currentIndex ? "active" : ""}`}
                                onClick={() => { setCurrentIndex(i); setIsPlaying(false); setProgress(0); }}
                            >
                                <span>{song.cover}</span>
                                <span>{song.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MusicPlayer;
