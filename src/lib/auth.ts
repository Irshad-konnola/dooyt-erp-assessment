import { NextResponse } from 'next/server';

const REQUIRED_API_KEY = 'dooyt-demo-key-2026'; 

export function verifyApiKey(request: Request): boolean {
  const apiKey = request.headers.get('X-Api-Key');
  return apiKey === REQUIRED_API_KEY;
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { error: 'Unauthorized. Missing or invalid X-Api-Key header.' },
    { status: 401 }
  );
}