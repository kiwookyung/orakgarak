import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";

interface FeedSortFilterProps {
  sortBy: string;
  onSortChange: (event: SelectChangeEvent<string>) => void;
}

const FeedSortFilter: React.FC<FeedSortFilterProps> = ({
  sortBy,
  onSortChange,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <FilterList sx={{ color: "#00ffff" }} />
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={sortBy}
          onChange={onSortChange}
          displayEmpty
          sx={{
            borderRadius: 2,
            backgroundColor: "rgba(0, 255, 255, 0.05)",
            color: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 255, 255, 0.3)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 255, 255, 0.5)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 255, 255, 0.7)",
            },
            "& .MuiSvgIcon-root": { color: "#00ffff" },
          }}
        >
          <MenuItem value="latest">최신순</MenuItem>
          <MenuItem value="name">이름순</MenuItem>
          <MenuItem value="likeCount">좋아요순</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FeedSortFilter;
