import React from 'react';
import Avatar from './Avatar/Avatar';
import classes from './Avatars.css';
const idx = 2;
const Avatars = props => {
    let urlList = props.urlList;
    urlList = urlList ? urlList.map((url, index) => {
        return (
            <Avatar
                imageURL={url}
                key={index}
                id={index}
                selected={index === props.selectedAvatar}
                clicked={(event) => {
                    return props.clickAvatar(index);
                }}
            />
        )
    }) : null;
    return (
        <ul className="Avatars">
            {urlList}
        </ul>
    )
};

export default Avatars;