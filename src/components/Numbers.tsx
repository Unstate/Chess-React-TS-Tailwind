const Numbers = () => {

    const numbers: number[] = [8, 7, 6, 5, 4, 3, 2, 1]

    return (
        <>
            {numbers.map((number, index) =>
                <div
                    key={index}
                    className="w-[100px] h-[100px] font-[50px] pl-[50px]">
                    {number}
                </div>
            )}
        </>
    )
}

export default Numbers