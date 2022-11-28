export type UserErrorT = {
    message: string,
    documentation_url: string
}
export type UserT = {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    name: string,
    company: string,
    location: string,
    blog: string,
    followers: number,
    following: number,
    twitter_username: string | null,
    email: string | null,
    bio: string,
    public_repos: string | number,
    created_at: string | Date,
    updated_at: string | Date,
}