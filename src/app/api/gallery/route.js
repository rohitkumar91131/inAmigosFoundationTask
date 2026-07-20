import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Photo from '@/models/Photo';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 9;
    const skip = (page - 1) * limit;

    const photos = await Photo.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Photo.countDocuments();
    const hasMore = skip + photos.length < total;

    return NextResponse.json({ photos, hasMore });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Support inserting a single photo or an array of photos
    const photosToInsert = Array.isArray(body) ? body : [body];
    const insertedPhotos = await Photo.insertMany(photosToInsert);

    return NextResponse.json({ success: true, inserted: insertedPhotos }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to insert photos' }, { status: 500 });
  }
}