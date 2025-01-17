import { Owner } from "./Owner";

export interface Repositories {
    name: string;
    owner: Owner;
    id: number,
    //   node_id: MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==,
    //   full_name: freeCodeCamp/freeCodeCamp,
    //   private: false,
    //   html_url: https://github.com/freeCodeCamp/freeCodeCamp,
    description: string,
    //   fork: false,
    //   url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp,
    //   forks_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks,
    //   keys_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id},
    //   collaborators_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator},
    //   teams_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams,
    //   hooks_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks,
    //   issue_events_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number},
    //   events_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events,
    //   assignees_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user},
    //   branches_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch},
    //   tags_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags,
    //   blobs_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha},
    //   git_tags_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha},
    //   git_refs_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha},
    //   trees_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha},
    //   statuses_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha},
    //   languages_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages,
    //   stargazers_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers,
    //   contributors_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors,
    //   subscribers_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers,
    //   subscription_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription,
    //   commits_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha},
    //   git_commits_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha},
    //   comments_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number},
    //   issue_comment_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number},
    //   contents_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path},
    //   compare_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head},
    //   merges_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges,
    //   archive_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref},
    //   downloads_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads,
    //   issues_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number},
    //   pulls_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number},
    //   milestones_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number},
    //   notifications_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating},
    //   labels_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name},
    //   releases_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id},
    //   deployments_url: https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments,
    //   created_at: 2014-12-24T17:49:19Z,
    //   updated_at: 2021-01-15T13:00:38Z,
    //   pushed_at: 2021-01-15T13:06:46Z,
    //   git_url: git://github.com/freeCodeCamp/freeCodeCamp.git,
    //   ssh_url: git@github.com:freeCodeCamp/freeCodeCamp.git,
    //   clone_url: https://github.com/freeCodeCamp/freeCodeCamp.git,
    //   svn_url: https://github.com/freeCodeCamp/freeCodeCamp,
    //   homepage: https://contribute.freecodecamp.org,
    //   size: 169792,
    stargazers_count: number,
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    forks_count: number,
    mirror_url: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    //   license: {
    //     key: bsd-3-clause,
    //     name: BSD 3-Clause \New\ or \Revised\ License,
    //     spdx_id: BSD-3-Clause,
    //     url: https://api.github.com/licenses/bsd-3-clause,
    //     node_id: MDc6TGljZW5zZTU=
    //   },
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
    score: number,

    is_favorite: boolean;
}