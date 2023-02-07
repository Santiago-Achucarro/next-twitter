import { UserContext } from "@/addons/Custom/UserContext";
import { Header, CenterMain, Navigation } from "@/components/InicioComponents";
import { LayoutPage } from "@/components/LayoutPage";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Inicio({ data }) {
  const router = useRouter();
  const getData = router.query;
  console.log(getData.token);
  const token = getData.token;
  const user = getData.dataUser;
  console.log(user);
  // useEffect(() => {}, [data]);
  return (
    <LayoutPage title={"Inicio"}>
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Header />
        <UserContext.Provider value={{ data, token, user }}>
          <CenterMain data={data} token={token} user={user} />
        </UserContext.Provider>
      </Box>
    </LayoutPage>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/post`);
  const data = await res.json();

  return { props: { data } };
}
