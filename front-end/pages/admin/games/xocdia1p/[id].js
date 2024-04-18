import BreadcrumbBar from "@/components/admin/BreadcrumbBar";
import Layout from "@/components/admin/Layout";
import ChiTietPhien from "@/components/admin/games/xocdia/ChiTietPhien";
import LichSuCuoc from "@/components/admin/games/xocdia/LichSuCuoc";
import LichSuCuocCharts from "@/components/admin/games/xocdia/LichSuCuocCharts";
import { LOAI_GAME } from "@/configs/game.config";
import { NextSeo } from "next-seo";
const ChiTiet = ({ ID }) => {
  const TYPE_GAME = LOAI_GAME.XOCDIA1P;
  const BreadcrumbData = [
    {
      title: "Admin",
      href: "/admin",
    },
    {
      title: "Games",
      href: "/admin/games",
    },
    {
      title: TYPE_GAME,
      href: `/admin/games/${TYPE_GAME}`,
    },
    {
      title: "Chi tiết",
      href: `/admin/games/${TYPE_GAME}/${ID}`,
    },
  ];

  return (
    <>
      <NextSeo title="Chi tiết game Xóc Đĩa 1 phút" />

      <Layout>
        <BreadcrumbBar data={BreadcrumbData} />
        <ChiTietPhien ID={ID} TYPE_GAME={TYPE_GAME} />
        <LichSuCuocCharts ID={ID} TYPE_GAME={TYPE_GAME} />
        <LichSuCuoc ID={ID} TYPE_GAME={TYPE_GAME} />
      </Layout>
    </>
  );
};
export default ChiTiet;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const ID = params.id;

  return {
    props: {
      ID: ID,
    },
  };
};
