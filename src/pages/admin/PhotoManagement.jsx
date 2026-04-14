import { useRef } from "react";
import { Upload, Trash2, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminLayout } from "@/components/admin";
import { useAdmin } from "@/context/AdminContext";

export default function PhotoManagement() {
  const { sitePhotos, sitePhotoOps } = useAdmin();
  const fileRef = useRef();

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => sitePhotoOps.add({ url: reader.result, name: file.name });
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Photo Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Photos uploaded here appear on the admin dashboard.</p>
        </div>
        <Button onClick={() => fileRef.current.click()} className="gap-2">
          <Upload size={16} /> Upload Photos
        </Button>
        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
      </div>

      {sitePhotos.length === 0 ? (
        <div
          onClick={() => fileRef.current.click()}
          className="border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center py-16 gap-3 cursor-pointer hover:border-primary/50 transition-colors"
        >
          <Image size={40} className="text-muted-foreground opacity-40" />
          <p className="text-muted-foreground text-sm">Click to upload photos</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sitePhotos.map((photo) => (
            <div key={photo.id} className="group relative rounded-xl overflow-hidden border border-border aspect-video bg-muted">
              <img src={photo.url} alt={photo.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => sitePhotoOps.remove(photo.id)}
                  className="w-9 h-9 rounded-full bg-destructive/90 flex items-center justify-center text-white hover:bg-destructive transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
              <p className="absolute bottom-0 left-0 right-0 px-2 py-1 text-xs text-white bg-black/40 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.name}
              </p>
            </div>
          ))}
          {/* Add more tile */}
          {/* <div
            onClick={() => fileRef.current.click()}
            className="rounded-xl border-2 border-dashed border-border aspect-video flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <Upload size={20} className="text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Add more</p>
          </div> */}
        </div>
      )}
    </AdminLayout>
  );
}
