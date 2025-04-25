

export default function TableHead({typeList}) {

    return (
        <thead>
            <tr>
                {
                    typeList.map((type, index) => {
                        return (
                            <th key={"type_" + index}>{type}</th>
                        );
                    })
                }
            </tr>
        </thead>
    );

}