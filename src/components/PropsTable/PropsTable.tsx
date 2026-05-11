import "./PropsTable.less";

interface PropItem {
    name: string;
    type: string;
    default: string;
    description: string;
}

interface PropsTableProps {
    title: string;
    data: PropItem[];
}

function PropsTable({ title, data }: PropsTableProps) {
    return (
        <div className="props-table">
            <h3>{title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>パラメータ</th>
                        <th>説明</th>
                        <th>型</th>
                        <th>デフォルト値</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((prop) => (
                        <tr key={prop.name}>
                            <td>{prop.name}</td>
                            <td>{prop.description}</td>
                            <td>
                                <code>{prop.type}</code>
                            </td>
                            <td>
                                <code>{prop.default}</code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropsTable;
