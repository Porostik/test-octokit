import { getOctokit } from "@actions/github";

const token = "123";

const octokit = getOctokit(token);

const main = async () => {
  const data = await octokit.rest.pulls.listCommits({
    owner: "Porostik",
    repo: "test-octokit",
    pull_number: 1,
  });

  console.log(data);
};

main();
