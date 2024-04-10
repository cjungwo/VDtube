import React from 'react';
import Main from '../components/section/Main';

import { developerText } from '../data/developer';
import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <Main
      title = "Developers"
      description="This is Recommend Developers Page"
    >
      <section id='developerPage'>
        <h2>Recommend Developers</h2>
        <div className="developer__inner">
            {developerText.map((developer, key) => (
                <div className="developer" key={key}>
                    <div className="developer__img play__icon">
                        <Link to={`/channel/${developer.channelId}`}>
                            <img src={developer.img} alt={developer.name} />
                        </Link>
                    </div>
                    <div className="developer__info">
                        <Link to={`/channel/${developer.channelId}`}>
                            {developer.name}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </Main>
  )
}

export default Developer