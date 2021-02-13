import React, { useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { animateScroll } from 'react-scroll';

import { THE_BRIDE } from '@/constants';
import WithAnimation from '../WithAnimation/UseIntersect';
import ScrollToDown from './ScrollToDown';
import Countdown from '../Countdown';

import { styWrapper, styHero, styBackground } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('id-hello-section').offsetTop;
    animateScroll.scrollTo(element);
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  return (
    <div css={styHero}>
      <header css={styBackground}>
        <div className="overlay" />
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <h2 className="text__date">
                  <span className="text__span">The wedding of</span>
                </h2>
                <h1 className="text__title">
                  <span className="text__span" style={{ padding: '4px 16px' }}>
                    {THE_BRIDE}
                  </span>
                </h1>
              </WithAnimation>
            </div>
          </div>
        </div>
      </header>
      <WithAnimation>
        <div style={{ marginTop: `calc(100% - ${alreadyDownloadData ? '0' : '20px'})` }}>
          <Countdown />
        </div>
      </WithAnimation>
      <div className="row">
        <ScrollToDown loading={loading} onClick={handleShowDetail} />
      </div>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
