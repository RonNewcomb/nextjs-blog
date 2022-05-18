import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/data/posts');

export interface IPost {
  id: string;
  title: string;
  date: string;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map(fileName => {
      //const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
      return {
        id: fileName.replace(/\.md$/, ''),
        date: new Date().toString(),
        title: fileName.replaceAll('_', ' '),
      } as IPost;
    })
    .sort(({ date: a }, { date: b }) => b.localeCompare(a));
}
