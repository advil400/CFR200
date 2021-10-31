import React from "react";

function VariantPicker({ variantGroups = [], defaultValues = {}, ...props }) {
  if (!variantGroups || variantGroups.length === 0) return null;

  return (
    <div>
      {variantGroups.map(({ options, ...group }) => (
        <div
          key={group.id}
        >
          <label htmlFor={group.id}>
            {group.name}: {' '}   
          </label>

          <select className="text-xs flex-nowrap my-1 bg-gray-100 text-black border-1 max-h-7 border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-200 p-1 px-1.5"
            id={group.id}
            defaultValue={defaultValues[group.id]}
            {...props}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          
        </div>
      ))}
    </div>
  );
}

export default VariantPicker;