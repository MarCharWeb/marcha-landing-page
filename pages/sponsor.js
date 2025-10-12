import Footer from "../components/Footer";

const Sponsor = ({ hideFooter = false }) => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <section
        className="relative z-[1] w-full overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div>
          <div className="relative w-full flex justify-center items-center">
      ``  <img
          src="/season13/SPONSORS/EXCLUSIVE.png"
          alt="exclusive background"
          className="w-screen h-auto object-contain block"
          style={{ objectFit: "contain" }}
        />
        <img
          src="/season13/LOGO/LG.png"
          alt="LG logo"
          className="absolute max-w-[45%] sm:max-w-[35%] md:max-w-[25%] h-auto object-contain"
          onClick={() => window.open("https://www.lg.com/vn/", "_blank")}
          style={{ top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
</div>
          <div className="relative w-full flex justify-center items-center">
  <img
    src="/season13/SPONSORS/STRATEGIC.png"
    alt="strategic background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain" }}
  />
  <div className="absolute inset-0 top-[20%] flex justify-around items-center px-[8%]">

    <img
      src="/season13/LOGO/BuzzMetrics.png"
      alt="BuzzMetrics logo"
      className="max-w-[30%] sm:max-w-[25%] md:max-w-[22%] lg:max-w-[18%] h-auto object-contain"
      onClick={() => window.open("https://buzzmetrics.com", "_blank")}
    />    
    <img
      src="/season13/LOGO/Z15.png"
      alt="Z15 logo"
      className="max-w-[30%] sm:max-w-[25%] md:max-w-[22%] lg:max-w-[18%] h-auto object-contain"
      onClick={() => window.open("https://www.z15miracle.com/", "_blank")}
    />
  </div>
</div>
          <div className="relative w-full flex justify-center items-center">
  <img
    src="/season13/SPONSORS/ACADEMIC.png"
    alt="academic background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain" }}
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-4 translate-y-[8%]">
    <div className="flex justify-center items-center gap-[3%] flex-wrap">
      <img src="/season13/LOGO/Mermar.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://www.mermarcourse.com/", "_blank")} />
      <img src="/season13/LOGO/Anymind.jpg" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://anymindgroup.com/", "_blank")} />
      <img src="/season13/LOGO/Lebros.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain"  onClick={() => window.open("https://lebros.vn/", "_blank")}/>
      <img src="/season13/LOGO/Wisdom.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://wisdomagency.com/", "_blank")}/>
    </div>

    <div className="flex justify-center items-center gap-[3%] flex-wrap">
      <img src="/season13/LOGO/TBWA.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://www.tbwa.com.vn/", "_blank")}/>
      <img src="/season13/LOGO/Greent.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://greentransition.asia/", "_blank")}/>
      <img src="/season13/LOGO/Soldo.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://soldo.vn/", "_blank")}/>
    </div>

    <div className="flex justify-center items-center gap-[3%] flex-wrap">
      <img src="/season13/LOGO/VTC.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://vtc.edu.vn/", "_blank")} />
      <img src="/season13/LOGO/Ematic.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://www.ematicsolutions.com/vn/", "_blank")} />
      <img src="/season13/LOGO/Pmax.png" className="max-w-[8%] sm:max-w-[8%] md:max-w-[9%] lg:max-w-[10%] h-auto object-contain" onClick={() => window.open("https://pmax.com.vn/", "_blank")} />
    </div>
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/GOLD.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />
<div className="absolute inset-0 flex top-[20%] flex-col items-center justify-center space-y-[0%]">
  <div className="flex justify-center space-x-[6%]">
    <img src="/season13/LOGO/ACFC.png" alt="ACFC" className="max-w-[9%] sm:max-w-[10%] md:max-w-[13%] object-contain" onClick={() => window.open("https://www.acfc.com.vn/", "_blank")}/>
    <img src="/season13/LOGO/Owndays.jpg" alt="Owndays" className="max-w-[9%] sm:max-w-[10%] md:max-w-[13%] object-contain" onClick={() => window.open("https://www.owndays.com/vn/vi", "_blank")}/>
    <img src="/season13/LOGO/Tomorrow.png" alt="Tomorrow" className="max-w-[9%] sm:max-w-[10%] md:max-w-[18%] object-contain" onClick={() => window.open("https://www.tomorrowmarketers.org/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[8%]">
    <img src="/season13/LOGO/Arena.png" alt="Arena" className="max-w-[9%] sm:max-w-[10%] md:max-w-[18%] object-contain" onClick={() => window.open("https://www.arena-multimedia.vn/", "_blank")}/>
    <img src="/season13/LOGO/Harmony.png" alt="Harmony" className="max-w-[9%] sm:max-w-[10%] md:max-w-[18%] object-contain" onClick={() => window.open("https://harmonyhub.vn/vi", "_blank")}/>
  </div>
</div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/SILVER.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />

  <div className="absolute inset-0 flex justify-center items-center top-[20%] space-x-[6%]">
    <img src="/season13/LOGO/Cocoon.png" alt="Cocoon" className="max-w-[12%] sm:max-w-[15%] md:max-w-[18%] object-contain" onClick={() => window.open("https://cocoonvietnam.com/", "_blank")}/>
    <img src="/season13/LOGO/Oatside.png" alt="Oatside" className="max-w-[12%] sm:max-w-[15%] md:max-w-[18%] object-contain" onClick={() => window.open("https://oatside.com/", "_blank")}/>
    <img src="/season13/LOGO/Wipro.jpg" alt="Wipro" className="max-w-[12%] sm:max-w-[15%] md:max-w-[18%] object-contain" onClick={() => window.open("https://wiprocci.com/vietnam/", "_blank")}/>
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/BRONZE.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />

  <div className="absolute inset-0 flex justify-center top-[20%] items-center space-x-[5%] flex-wrap">
    <img src="/season13/LOGO/Potato.png" alt="Potato" className="max-w-[6%] sm:max-w-[6%] md:max-w-[8%] object-contain" onClick={() => window.open("https://potato.clothing/", "_blank")}/>
    <img src="/season13/LOGO/Voco.png" alt="Voco" className="max-w-[6%] sm:max-w-[6%] md:max-w-[8%] object-contain" onClick={() => window.open("https://www.voco-center.com/", "_blank")}/>
    <img src="/season13/LOGO/Dh.png" alt="Dh" className="max-w-[6%] sm:max-w-[6%] md:max-w-[8%] object-contain" onClick={() => window.open("https://dhfoods.com.vn/vi", "_blank")}/>
    <img src="/season13/LOGO/Lotha.png" alt="Lotha" className="max-w-[6%] sm:max-w-[6%] md:max-w-[8%] object-contain" onClick={() => window.open("https://lothafood.vn/", "_blank")}/>
    <img src="/season13/LOGO/Student.png" alt="Student" className="max-w-[6%] sm:max-w-[6%] md:max-w-[8%] object-contain" onClick={() => window.open("https://www.rmit.edu.vn/students/campus-life/student-council", "_blank")}/>
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/STREAM.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />

  <div className="absolute inset-0 flex justify-center top-[25%] items-center space-x-[23%]">
    <img src="/season13/LOGO/Hepmil.png" alt="Hepmil" className="max-w-[8%] sm:max-w-[10%] md:max-w-[13%] object-contain" onClick={() => window.open("https://www.hepmil.com/vi", "_blank")}/>
    <img src="/season13/LOGO/Ame.jpg" alt="Ame" className="max-w-[8%] sm:max-w-[10%] md:max-w-[13%] object-contain" onClick={() => window.open("https://www.facebook.com/amecafenbrunch/?locale=vi_VN", "_blank")}/>
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/VENUE.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />

  <div className="absolute inset-0 flex justify-center top-[25%] items-center">
    <img src="/season13/LOGO/Capella.png" alt="Capella" className="max-w-[18%] sm:max-w-[20%] md:max-w-[25%] object-contain" onClick={() => window.open("https://capellagallery.com/", "_blank")}/>
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/ACCOMODATION.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />

  <div className="absolute inset-0 flex justify-center top-[32%] items-center">
    <img src="/season13/LOGO/Elpino.png" alt="Elpino" className="max-w-[18%] sm:max-w-[20%] md:max-w-[23%] object-contain" onClick={() => window.open("https://cityhouseapartment.com/en/serviced-apartment-for-rent-in-hcmc-saigon/apartment-for-rent-in-district-1/cityhouse-el-pino-realm", "_blank")} />
  </div>
</div>
<div className="relative w-screen h-auto">
  <img
    src="/season13/SPONSORS/MEDIA.png"
    alt="sponsorship background"
    className="w-screen h-auto object-contain block"
    style={{ objectFit: "contain", display: "block" }}
  />
<div className="absolute inset-0 flex flex-col items-center justify-center top-[10%] space-y-[0%]">
  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Ybox.png" alt="Ybox" className="max-w-[10%] sm:max-w-[8%] md:max-w-[10%] object-contain" onClick={() => window.open("https://ybox.vn/idyovhrlnl8r7l", "_blank")}/>
    <img src="/season13/LOGO/Arena.png" alt="Arena" className="max-w-[10%] sm:max-w-[8%] md:max-w-[9%] object-contain" onClick={() => window.open("https://www.arena-multimedia.vn/", "_blank")}/>
    <img src="/season13/LOGO/Edu2.png" alt="Edu2" className="max-w-[10%] sm:max-w-[8%] md:max-w-[10%] object-contain" onClick={() => window.open("https://edu2review.com/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Brands.png" alt="Brands" className="max-w-[10%] sm:max-w-[8%] md:max-w-[10%] object-contain" onClick={() => window.open("https://www.brandsvietnam.com/", "_blank")}/>
    <img src="/season13/LOGO/Job.png" alt="Job" className="max-w-[10%] sm:max-w-[8%] md:max-w-[10%] object-contain" onClick={() => window.open("https://job3s.ai/", "_blank")}/>
    <img src="/season13/LOGO/Edu.png" alt="Edu" className="max-w-[10%] sm:max-w-[8%] md:max-w-[10%] object-contain" onClick={() => window.open("https://eduagency.com.vn/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Keva.png" alt="Keva" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://kevalink.com/", "_blank")}/>
    <img src="/season13/LOGO/ADS.png" alt="Ads" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://adsangtao.com/", "_blank")}/>
    <img src="/season13/LOGO/Brand.png" alt="Brand" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://brandvn.vn/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Vina.png" alt="Vina" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://vina-aspire.com/", "_blank")} />
    <img src="/season13/LOGO/Vnt.png" alt="Vnt" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://vntre.vn/", "_blank")}/>
    <img src="/season13/LOGO/Bold.png" alt="Bold" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://boldcreativelab.com/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Mar.png" alt="Mar" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://www.facebook.com/marwuycrew/", "_blank")}/>
    <img src="/season13/LOGO/Viet.png" alt="Viet" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://www.facebook.com/your.vietnammarketing", "_blank")}/>
    <img src="/season13/LOGO/Viets.png" alt="Viets" className="max-w-[10%] sm:max-w-[11%] md:max-w-[14%] object-contain" onClick={() => window.open("https://vietsuccess.asia/ve-chung-toi/", "_blank")}/>
  </div>

  <div className="flex justify-center space-x-[5%]">
    <img src="/season13/LOGO/Eni.jpg" alt="Eni" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://enijobs.vn/", "_blank")}/>
    <img src="/season13/LOGO/Mark.png" alt="Mark" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://marketingtrips.com/", "_blank")}/>
    <img src="/season13/LOGO/Hi.JPG" alt="Hi" className="max-w-[10%] sm:max-w-[11%] md:max-w-[16%] object-contain" onClick={() => window.open("https://www.facebook.com/p/Hi-Fen-Marketing-61554799268384/", "_blank")}/>
  </div>
</div>

</div>
        </div>
      </section>
<section className="relative w-full">
  <div className="relative w-full">
    <img
      src="/season13/SPONSORS/SPONS.png"
      alt="sponsorship background"
      className="w-screen h-auto object-contain block"
      style={{ objectFit: "contain" }}
    />
    {!hideFooter && (
      <div className="absolute bottom-0 w-full bg-transparent z-[10]">
        <Footer />
      </div>
    )}
  </div>
</section>
    </div>
  );
};

export default Sponsor;