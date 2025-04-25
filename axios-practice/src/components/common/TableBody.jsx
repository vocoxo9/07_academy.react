

export default function TableBody({dataList, keyName}) {

    return (
        <tbody>
            {
                dataList.map((data, index) => {
                    return (
                        <tr key={keyName + index}>
                            {
                                Object.keys(data).map((key, index) => {
                                    return (<td key={index}>{data[key]}</td>);
                                })
                            }
                        </tr>
                    );
                })
            }
        </tbody>
    );
}