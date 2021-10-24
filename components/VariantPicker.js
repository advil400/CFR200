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
            {group.name}:
          </label>

          <select className=""
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