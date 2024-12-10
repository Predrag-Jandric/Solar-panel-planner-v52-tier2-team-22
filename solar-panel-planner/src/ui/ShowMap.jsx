import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function ShowMap({ appointmentsArr }) {
  const coordLA = { lat: 34.0549, lng: -118.2426 };
  const [markerID, setMarkerID] = useState(null);

  return (
    <>
      <APIProvider apiKey={API_KEY} libraries={["marker"]}>
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          style={{ width: "80vw", height: "80vh", margin: "0 auto" }}
          defaultCenter={coordLA}
          defaultZoom={10}
          gestureHandling={"greedy"}
          // disableDefaultUI={true}
        >
          {appointmentsArr?.map((user, index) => (
            <PlaceMarker
              isOpen={user.id == markerID}
              setMarkerID={setMarkerID}
              key={user.id}
              user={user}
              index={index}
            />
          ))}
        </Map>
      </APIProvider>
    </>
  );
}

function PlaceMarker({ isOpen, setMarkerID, user, index }) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setMarkerID(isOpen ? null : user.id)}
        position={user.address.coord}
        key={user.id}
        title={"AdvancedMarker that opens an Infowindow when clicked."}
      >
        <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"}>
          {index + 1}
        </Pin>
        {/* {user.id <= 30 ? (
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        ) : (
          <Pin background={"purple"} glyphColor={"#000"} borderColor={"#000"} />
        )} */}
      </AdvancedMarker>
      {isOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setMarkerID(null)}
        >
          {user.name}
          <br />
          {user.address.combinedAddress}
          <br />
          {user.phone}
          <br />
          {user.date}
        </InfoWindow>
      )}
    </>
  );
}
