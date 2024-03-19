import { SettingsInterface } from "../types";

const SettingsBar = ({ modes, currentMode, onModeChange, currentQuotes, onQuotesChange, dimensions, onDimensionsChange, measurementOptions, measurement ,onMeasurementChange }: SettingsInterface) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="griditem">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Double or Single Quotes?</label>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        defaultChecked={currentQuotes === '"'}
                        className="sr-only peer"
                        onChange={(e: any) => {
                            console.log(e.target.checked);
                            onQuotesChange(e.target.checked ? '"' : "'");
                        }}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
                </label>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-3" style={{position:'relative', top:-8}}>
                    {currentQuotes === '"' ? 'Using double quotes' : 'Using single quotes'}
                </span>
            </div>

            <div className="griditem">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Generation Mode</label>
                
                <select
                    id="generate-mode"
                    value={currentMode}
                    onChange={(e: any) => {
                        onModeChange(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                >
                    {Object.keys(modes).map(key => (
                        <option value={key} key={key}>{modes[key]}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="griditem">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width <small>({measurement})</small></label>
                    <input 
                        type="number" 
                        id="elWidth" 
                        min={0}
                        value={dimensions[0]}
                        aria-describedby="helper-text-explanation" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        disabled={currentMode == 'background' ? true : false}
                        onChange={(e:any) => {
                            onDimensionsChange([parseInt(e.target.value),dimensions[1]]);
                        }}
                    />
                    </div>
                    <div className="griditem">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height <small>({measurement})</small></label>
                        <input 
                            type="number" 
                            id="elHeight" 
                            min={0}
                            value={dimensions[1]}
                            aria-describedby="helper-text-explanation" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            disabled={currentMode == 'background' ? true : false}
                            onChange={(e:any) => {
                                
                                onDimensionsChange([dimensions[0],parseInt(e.target.value)]);
                            }}
                        />
                    </div>
                    <div className="griditem">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                    
                        <select
                            id="generate-mode"
                            value={measurement}
                            disabled={currentMode == 'background' ? true : false}
                            onChange={(e: any) => {
                                onMeasurementChange(e.target.value);
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            {measurementOptions.map((val, key) => (
                                <option value={val} key={key+"mopt"}>{val}</option>
                            ))}
                        </select>
                    </div>
                </div>
        </div>
    );
};

export default SettingsBar;
