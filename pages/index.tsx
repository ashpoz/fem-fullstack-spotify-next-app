import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="red"
      roundImage
      subtitle="profile"
      title="Adrian"
      description="15 public playlists"
      image="./me.JPG"
    >
      <div>homepage</div>
    </GradientLayout>
  );
};

export default Home;
