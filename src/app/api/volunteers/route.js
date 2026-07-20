import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Volunteer from '@/models/Volunteer';

export async function GET() {
  try {
    await dbConnect();
    // Fetch all volunteers, sorting them by role or date added
    const volunteers = await Volunteer.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ volunteers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch volunteers' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const volunteersToInsert = Array.isArray(body) ? body : [body];
    const inserted = await Volunteer.insertMany(volunteersToInsert);

    return NextResponse.json({ success: true, inserted }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to insert volunteers' }, { status: 500 });
  }
}