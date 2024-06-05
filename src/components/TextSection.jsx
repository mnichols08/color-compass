function TextSection({ color }) {
  return (
    <div style={{ backgroundColor: color.hex }}>
      <p className="flex flex-col items-start text-left">{color.hex}</p>
      <p className="flex flex-col items-start text-left">{color.name}</p>
      <p className="flex flex-col items-start text-left w-2/3 md:w-[460px]">
        {color.description}
      </p>
    </div>
  );
}

export default TextSection;
