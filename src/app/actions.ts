"use server"

export const getAccessToken = async () => {
  const url = `${process.env.SPOTIFY_URL}/token`;
  const params = `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
    next: { revalidate: 3600 },
  });

  if (!response.ok) return { data: null, error: response.statusText }

  const data = await response.json();
  return { data: data.access_token, error: null };
}

export const getCurrentPlayingTrack = async (accessToken: string) => {
  const response = await fetch(`${process.env.SPOTIFY_URL_API}/tracks/4kjI1gwQZRKNDkw1nI475M`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) return { data: null, error: response.statusText }

  const data = await response.json();
  return { data: data, error: null };
}