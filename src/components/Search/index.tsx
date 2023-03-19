import { FC } from "react";

export interface ISearchProps {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Search: FC<ISearchProps> = ({ placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-80 text-slate-900 px-8 text-center"
      />
    </div>
  );
};

export default Search;
