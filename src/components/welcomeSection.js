import React from 'react';
import './welcome.css';

function test(param) {
  let message = document.querySelector(`.${param.target.className}`);
  message.textContent = 'welcome';

  setTimeout(() => {
    message.remove();
  }, 1000);
}

function WelcomeSection() {
  return <div className="welcome" onAnimationEnd={test.bind(this)}></div>;
}

export default WelcomeSection;
