"use client"
export default function Data({params}) {
    return (
      <div>
            <h1>Catch all segments of routes</h1>
        {params.data.map((val, index) => (
          <p>Segment {index+1} {val}</p>
            ))}
      </div>
    );
  }