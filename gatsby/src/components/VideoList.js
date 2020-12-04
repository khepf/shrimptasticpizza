import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

function SingleVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video.slug.current}`}>
        <h2>
          <span className="mark">{video.name}</span>
        </h2>
      </Link>
      <p>
        <span className="mark">{video.description}</span>
      </p>
      <Img fluid={video.image.asset.fluid} alt={video.name} />
    </div>
  );
}

export default function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => (
        <SingleVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
