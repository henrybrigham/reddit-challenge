import { REDDIT_URL } from 'constants/index';

export const getPost = async () => {
	await fetch(REDDIT_URL).then(
		res => {
			console.log('**res', res.json());
			res.json().then((post) => post);
			// const post = res.body.json()
			// return true;
		},
		error => {
			console.log('error fetching reddit post json:', error);
			throw Error(error);
		}
	);
}