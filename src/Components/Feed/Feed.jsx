import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const response = await fetch(videoList_url);
    const data = await response.json();
    setData(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        const { id, snippet } = item;
        const { title, channelTitle, thumbnails, publishedAt } = snippet;
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={id}>
            <img src={item.snippet.thumbnails.medium.url} alt={title} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;