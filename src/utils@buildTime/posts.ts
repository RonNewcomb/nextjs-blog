import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data/posts');

export interface IPost {
  id: string;
  title: string;
  date: Date;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map(fileName => {
      const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
      const matterResult = matter(fileContents);
      return {
        id: fileName.replace(/\.md$/, ''),
        ...matterResult.data,
      } as IPost;
    })
    .sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
}
