import React from 'react';
import WithAnimation from '../WithAnimation';
import UseAnimation from '../WithAnimation/UseIntersect';

import { styWrapper } from './styles';

import IconMask from './assets/face-mask.png';
import IconSocialDistancing from './assets/social-distancing.png';
import IconGuest from './assets/parents.png';
import IconDoctor from './assets/doctor.png';
import IconClock from './assets/clock.png';
import IconQRcode from './assets/qr.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <UseAnimation>
              <h2 className="main-font">Panduan Protokol Covid-19</h2>
              <p className="info" style={{ marginBottom: '-16px' }}>
                Keberlangsungan acara ini mengacu pada pedoman kesehatan dari Kementerian Kesehatan:
              </p>
            </UseAnimation>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <WithAnimation>
            <div className="col-md-12">
              <SectionBox icon={IconMask} text="Wajib menggunakan masker dan dilakukan pengecekan suhu." />
              <SectionBox icon={IconSocialDistancing} text="Pembatasan jarak dan pembatasan jumlah tamu." />
              <SectionBox icon={IconGuest} text="Satu undangan hanya untuk 2 orang tamu." />
              <SectionBox
                icon={IconDoctor}
                text="Dipantau tim dokter dan disediakan hand sanitizer di berbagai titik. "
              />
              <SectionBox
                icon={IconQRcode}
                text="Wajib membawa QRCode untuk meminimalisir kontak fisik melalui pena. "
              />
              <SectionBox icon={IconClock} text="Wajib hadir sesuai sesuai waktu yang tertera di undangan." />
            </div>
          </WithAnimation>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
