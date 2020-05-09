import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getPost } from 'api';

const RedditPost = () => {
	const [post, setPost] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState(false);
	// {hasOccurred: false, code: undefined, message: ''}

	useEffect(() => {
		if(isEmpty(post) && !isFetching) {
			setIsFetching(true);
			try {
				getPost().then((fetchedPost) => {
					console.log('**fetchedPost', fetchedPost);

					setPost(fetchedPost)});
				// setPost(post);
				setIsFetching(false)
			} catch (e) {
				setError(true);
			}
		}
	}, [post, setPost, setError, setIsFetching, isFetching]);

	if (isFetching) {
		return <h1>loading...</h1>
	}

	if (error) {
		return <h1>There was an error, fuck</h1>
	}
	console.log('**post', post);
	return (
		<h1>fuck yeah les go</h1>
	)
}

export default RedditPost;