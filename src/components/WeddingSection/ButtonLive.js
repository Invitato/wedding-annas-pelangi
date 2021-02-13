import React from 'react';

import IconIg from './assets/youtube.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara virtual melalui siaran langsung Youtube: </p>
        <a href="https://youtube.com/channel/UC8H7LwyMGLic4tTFHwE0Qkw" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live youtube" />
              <span>Pelangi Langit Biru</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
