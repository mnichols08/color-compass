import liImg from "../img/linkedin.svg";
import ghImg from "../img/github.svg";

export default function FooterVoyager({ liUrl, ghUrl, voyager }) {
  return (
    <div className="flex gap-0.5 items-center md:text-nowrap">
      <a href={liUrl}>
        <img
          className="pl-[1px]"
          src={liImg}
          alt="linkedin icon"
        />
      </a>
      <a href={ghUrl}>
        <img src={ghImg} alt="github icon" />
      </a>
      <p>{voyager}</p>
    </div>
  );
}
