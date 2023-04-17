import { useRef, useState } from "react";

const SectionFourGIF = (props: any) => {
  // for ClickAblepanda
  const [srcPanda, setSrPanda] = useState<string>(
    "images/Animations/Pand0_IDLEa.gif"
  );

  const [tempSrcPanda, setTempSrcPanda] = useState<string>();

  const gifRefPanda = useRef<HTMLImageElement>(null);

  function handleClickPnada(): void {
    setTempSrcPanda("/images/Animations/Pand0_CLICKABLEa.gif");
    setTimeout(() => {
      setTempSrcPanda("");
    }, 1200);
  }
  // for ClickAbleworker
  const [srcWorker, setSrcWorker] = useState<string>(
    "/images/Animations/Boo3ConstructionBoo_IDLE.gif"
  );

  const [tempSrcWorker, setTempSrcWorker] = useState<string>();

  const gifRefWorker = useRef<HTMLImageElement>(null);

  function handleClickWorker(): void {
    setTempSrcWorker("images/Animations/Boo3ConstructionBoo_CLICKABLE.gif");
    setTimeout(() => {
      setTempSrcWorker("");
    }, 1800);
  }

  return (
    <>
      <img
        ref={gifRefPanda}
        src={tempSrcPanda || srcPanda}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "77.5%",
          left: "23%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickPnada}
      />
      <img
        ref={gifRefWorker}
        src={tempSrcWorker || srcWorker}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickWorker}
      />
      <a href="/">
        <img
          src="/images/Section4/thumb_ArrowTowardsMarket.gif"
          alt="My image"
          width={"10%"}
          style={{
            position: "absolute",
            top: "50%",
            left: "95%",
            transform: "translate(-50%, -50%)",

            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </a>
    </>
  );
};

export default SectionFourGIF;