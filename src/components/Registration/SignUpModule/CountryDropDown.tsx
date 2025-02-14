import { useState, useRef, useEffect, FC } from "react";
import countryWithCode from "../../Utilities/countryWIthCode";
import "../../../App.css";

interface Props {
  selectedCountrys: string;
  setUserData: any;
}

export const CountryDropDown = ({ selectedCountrys, setUserData }: Props) => {
  const [input, setInput] = useState<string>(selectedCountrys);
  const [filteredCountries, setFilteredCountries] = useState(countryWithCode);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setInput(searchValue);

    if (searchValue.trim() === "") {
      setUserData((prev: any) => ({ ...prev, country: "" }));
    }

    const filtered = countryWithCode.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCountries(filtered);
    setIsOpen(true);
  };

  const handleSelect = (name: string, code: string) => {
    setUserData((prev: any) => ({ ...prev, country: name, countrycode: code }));
    setInput(name);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    setInput(selectedCountrys);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCountrys]);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <input
        type="text"
        placeholder="Please select your country"
        className="dark:focus:border-Bright_Blue border-[1px] border-Soft_Gray dark:border-Soft_Gray_20 dark:bg-black rounded-[8px] h-[64px] px-4 placeholder:text-gray-400 focus:outline-none focus:border-Bright_Blue text-[14px] w-[100%] font-medium"
        onChange={handleChange}
        value={input}
        onFocus={() => setIsOpen(true)}
      />

      {/* Dropdown with animation */}
      <div
        className={`custom-scrollbar absolute w-full mt-1 border-[1px] border-Soft_Gray max-h-40 overflow-y-auto bg-white dark:bg-black rounded-md shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <p
              key={country.code}
              className="px-4 py-2 cursor-pointer hover:bg-Soft_Gray_20 transition-colors duration-200"
              onClick={() => handleSelect(country.name, country.dial_code)}
            >
              {country.name}
            </p>
          ))
        ) : (
          <p className="px-4 py-2 text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};
