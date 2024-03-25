import React, { useState } from "react";
import { Input, InputAdornment, Box, IconButton } from "@mui/material";
import { CloseIcon } from "./img/CloseIcon";

interface SearchInputProps {
  onSearch: (value: string) => void;
  setSearchQuery: (value: string) => void;
  searchQuery: string;
}
export const SearchInput = (props: SearchInputProps) => {
  const {onSearch, searchQuery} = props;
  const [value, setValue] = useState<string>(searchQuery);

  const handleChange = (event: any) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(value);
    }
  };

  const handleClear = () => {
    onSearch("");
    setValue("");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Input
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        sx={{
          backgroundColor: "secondary.light",
          textTransform: "uppercase",
          outline: "0",
          boxSizing: "border-box",
          border: "1px solid transparent",
          letterSpacing: "2px",
          fontSize: "24px",
          lineHeight: "30px",
          padding: "12px",
          width: "100%",
          height: "54px",
          "&::placeholder": {
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "secondary.main",
            opacity: 1,
            padding: 0,
          },
          "&:hover": {
            borderColor: "secondary.light",
            backgroundColor: "primary.light",
          },
          "&.Mui-focused": {
            borderColor: "primary.main",
            backgroundColor: "primary.light",
          },
        }}
        placeholder="SEARCH"
        disableUnderline
      />
      {searchQuery && (
        <Box
          sx={{
            position: "absolute",
            top: "4px",
            left: "4px",
            bottom: "4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "primary.main",
            gap: "12px",
            color: "primary.light",
            padding: "8px",
            letterSpacing: "2px",
            fontSize: "24px",
            lineHeight: "30px",
            textTransform: "uppercase",
          }}
        >
          <span>{searchQuery}</span>
          <IconButton
            onClick={handleClear}
            sx={{
              color: "primary.light",
              padding: 0,
              width: "16px",
              height: "30px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
