import styles from "./Like.module.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
function Like() {
  const [Liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!Liked);
  };
  return (
    <div>
      <h3 className={styles.heading}>Hit Like Button</h3>
      {Liked ? (
        <FaHeart onClick={toggleLike} color="#DF60EB" size={40} />
      ) : (
        <CiHeart onClick={toggleLike} size={40} />
      )}
    </div>
  );
}

export default Like;
