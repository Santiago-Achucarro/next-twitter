import { getApi } from "@/addons/customHooks";
import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";
import { useQuery, useMutation, useQueryClient } from "react-query";

const GetPost = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery("post", getApi);

  if (isError) {
    return <h1>Hay error</h1>;
  }

  if (isLoading) {
    return <h1>isLoading...</h1>;
  }

  return data.map((post) => {
    return (
      <Box>
        <Typography>{post.userName}</Typography>
        <Typography>{post.content}</Typography>
      </Box>
    );
  });
};

export { GetPost };
