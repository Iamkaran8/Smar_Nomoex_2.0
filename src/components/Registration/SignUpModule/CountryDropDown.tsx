import { useState, useRef, useEffect } from "react";
import countryWithCode from "../../Utilities/countryWIthCode";
interface Props {
  selectedCountrys: string;
  setUserData: any;
}
export const CountryDropDown = ({ selectedCountrys, setUserData }: Props) => {
  const [input, setInput] = useState<string>(selectedCountrys);
  const [filteredCountries, setFilteredCountries] = useState(countryWithCode);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  //Handle Change Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setInput(searchValue);
    // setSelectedCountry(null);
    // If input is cleared, update userData
    if (searchValue.trim() === "") {
      setUserData((prev: any) => ({ ...prev, country: "" })); // Clear country in userData
    }

    const filtered = countryWithCode.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCountries(filtered);
    setIsOpen(true);
  };

  const handleSelect = (name: string) => {
    setUserData((prev: any) => ({ ...prev, country: name })); // Update userData first
    setInput(name); // Immediately update input field
    // setSelectedCountry(name);
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
      {isOpen && (
        <div className="absolute dark:bg-black w-full mt-1 border-[1px] border-Soft_Gray max-h-40 overflow-y-auto bg-white rounded-md shadow-lg">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <p
                key={country.code}
                className="px-4 py-2 cursor-pointer hover:bg-Soft_Gray_20"
                onClick={() => handleSelect(country.name)}
              >
                {country.name}
              </p>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};
