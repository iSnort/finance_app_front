
type Props = {
    // this is a re-usable component thas why the type is any 
    config: any;
    data: any;
};

const RatioList = ({ config, data }: Props) => {
    const renderRows = config.map((row: any) => {
        return(
            <li className="py-3 sm:py-4" >
                <div className="flex items-center space-x-4" >
                    <div className="flex-1 mim-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </p>
                        <p className="text-sm text-gray-500 truncate" >
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )    
    });

    return (
    <div className="bg-white shadow rounded-lg mb-4 mt-4 ml-4 p-4 sm:p-6 h-full" >
        <ul className="divide-y didive-gray-200" >{renderRows}</ul>
    </div>
  )
}

export default RatioList