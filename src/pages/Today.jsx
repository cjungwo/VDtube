import React from 'react';
import Main from '../components/section/Main';


import { todayText } from '../data/today';
import { Link } from 'react-router-dom';

const Today = () => {
  return (
    <Main
    title = "Today's Recommend"
      description="This is Today's Recommend Page"
    >
      <section id='todayPage'>
        <h2>Recommend Video</h2>

        {todayText.map((today, key) => (
            <div className='today__inner' key={key}>
                <div className='today__thumb play__icon'>
                    <Link to={today.page}>
                        <img src={today.img} alt={today.title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={today.page}>{today.title}</Link>
                    </h3>
                    <p className='desc'>{today.desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                        </span>
                        <span className='date'>{today.date}</span>
                    </div>
                </div>
            </div>
        ))}
    </section>
    </Main>
  )
}

export default Today