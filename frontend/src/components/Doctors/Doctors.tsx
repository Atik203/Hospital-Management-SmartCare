import { Input, Listbox, ListboxItem } from "@nextui-org/react";
import { Selection } from "@react-types/shared";
import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { ListboxWrapper } from "../ListBoxWrapper/ListBoxWrapper";

const Doctors = () => {
  const filters: string[] = ["Name", "Designation", "Specialization"];

  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );
  const handleSelectionChange = (keys: Selection) => {
    const newKeys = new Set<string>();
    for (const key of keys) {
      newKeys.add(String(key));
    }
    setSelectedKeys(newKeys);
  };

  return (
    <div className="mx-auto my-20 mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 w-[95%]">
      <div className="md:col-span-1">
        <Input
          className="mx-auto"
          disabled
          variant="bordered"
          labelPlacement="outside"
          size="lg"
          classNames={{
            label: "ml-2 no-asterisk",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white my-input text-[#E3C3C3]",
            inputWrapper: "bg-white",
          }}
          placeholder="Filter Doctors"
          startContent={<FaFilter size={18} className="text-[#E3C3C3]" />}
          type="search"
        />
        <div className="flex flex-col gap-4 mt-1">
          <Listbox
            variant="solid"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
          >
            {filters.map((filter) => (
              <ListboxItem
                key={filter}
                className="p-0 m-0"
                classNames={{
                  selectedIcon: "hidden",
                }}
              >
                <ListboxWrapper selected={selectedKeys.has(filter)}>
                  {filter}
                </ListboxWrapper>
              </ListboxItem>
            ))}
          </Listbox>
          <p className="text-small px-2 font-semibold">
            Selected Filter: {selectedValue}
          </p>
        </div>
      </div>
      <div className="md:col-span-3">
        <Input
          className="mx-auto"
          radius="full"
          variant="bordered"
          size="lg"
          labelPlacement="outside"
          classNames={{
            label: "ml-2 no-asterisk",
            errorMessage: "text-red-500 text-sm px-3",
            input: "bg-white font-bold my-input",
            inputWrapper: "bg-white",
          }}
          placeholder="Type to search..."
          startContent={
            <IoSearchCircleOutline
              className="text-[#E3C3C3] font-bold"
              size={28}
            />
          }
          type="search"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default Doctors;
