import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
        <h1>OOTY</h1>
        <div className="img"></div>
        {/* <img src={require("./images/ooty.jpg")} alt="ooty"></img> */}
        <p><strong><span style={{color:'blue' , fontSize:'40px' }}>O</span></strong>oty, officially known as Udhagamandalam, is a picturesque hill station located in the Nilgiris district of Tamil Nadu, India. Nestled in the Western Ghats, Ooty is often referred to as the "Queen of Hill Stations" due to its breathtaking scenery, lush greenery, and cool climate, making it a popular destination for both tourists and honeymooners.
        Situated at an altitude of approximately 2,240 meters (7,350 feet) above sea level, Ooty enjoys a pleasant climate throughout the year. The average temperature ranges from 10°C to 20°C, providing a refreshing escape from the heat of the plains. Summers (March to June) are cool, while winters (November to February) can be chilly, with temperatures occasionally dropping below freezing. The monsoon season (July to September) brings heavy rainfall, enhancing the natural beauty of the region.
        Ooty was originally a tribal land occupied by the Todas, an indigenous tribe of the Nilgiris. The British colonized Ooty in the early 19th century, transforming it into a summer retreat for officials of the British Raj. This colonial legacy is still visible in the architecture of old bungalows, churches, and public buildings that dot the town. The influence of British culture blends with the traditional customs of the local Tamil and Toda communities, creating a unique cultural mosaic.
        Ooty celebrates a variety of festivals, blending both tribal and modern influences. The annual Summer Festival, held in May, is a major event featuring flower shows, cultural programs, and sports competitions. The Toda tribes also celebrate their traditional rituals with distinctive music and dance.
        Local cuisine in Ooty includes traditional Tamil dishes like dosas, idlis, and sambhar, as well as colonial-era treats like cakes and chocolates. The cool climate makes hot tea, especially the locally produced Nilgiri tea, a popular choice among visitors.
        </p>
    </div>
  )
}

export default Header