// Enter Supabase Information
const SUPABASE_URL = 'https://lhgrvdplrdquocvtuqid.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZ3J2ZHBscmRxdW9jdnR1cWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODcsImV4cCI6MTk1OTkxNzQ4N30.YL07XOjiKwuejJXfhxE0yqRWv0PG7Qnk_XDLuQA-S-E';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    //console.log(resp);
    return resp.user;
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    //console.log(resp);
    return resp;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) {
        location.replace('/');
    }
}

export async function redirectIfLoggedIn() {
    const user = getUser();
    if (user) {
        location.replace('/other-page');
    }
}

export async function logout() {
    await client.auth.signOut();
    location.replace('/');
}
