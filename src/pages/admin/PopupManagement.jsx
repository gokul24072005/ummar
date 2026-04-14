import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminLayout, DataTable, FormModal, TextField } from "@/components/admin";
import { useAdmin } from "@/context/AdminContext";

const empty = { title: "", description: "", isActive: false };

export default function PopupManagement() {
  const { popups, popupOps } = useAdmin();
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const open = (mode, data = empty) => { setModal({ mode }); setForm(data); setErrors({}); };
  const close = () => setModal(null);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.description.trim()) e.description = "Description is required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    modal.mode === "edit" ? popupOps.update(form.id, form) : popupOps.add(form);
    close();
  };

  const toggleActive = (row) => popupOps.update(row.id, { isActive: !row.isActive });

  const columns = [
    { key: "title", label: "Title" },
    { key: "description", label: "Description", render: (v) => <span className="line-clamp-1 max-w-xs">{v}</span> },
    {
      key: "isActive", label: "Status",
      render: (v, row) => (
        <button
          onClick={(e) => { e.stopPropagation(); toggleActive(row); }}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
            v ? "bg-green-500/15 text-green-500 border-green-500/30 hover:bg-green-500/25"
              : "bg-muted text-muted-foreground border-border hover:bg-muted/80"
          }`}
        >
          {v ? "Active" : "Inactive"}
        </button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="font-display text-xl md:text-2xl font-bold">Popup Management</h1>
          <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Popups display in the Hero section of the homepage.</p>
        </div>
        <Button onClick={() => open("create")} size="sm" className="gap-1.5">
          <Plus size={15} /> <span className="hidden sm:inline">Add Popup</span><span className="sm:hidden">Add</span>
        </Button>
      </div>

      <DataTable columns={columns} data={popups} onEdit={(row) => open("edit", row)} onDelete={popupOps.remove} />

      {modal && (
        <FormModal title={modal.mode === "edit" ? "Edit Popup" : "New Popup"} onClose={close} onSubmit={handleSubmit}>
          <TextField label="Title" placeholder="Popup title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} error={errors.title} />
          <TextField label="Description" placeholder="Popup description" textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} error={errors.description} />
        </FormModal>
      )}
    </AdminLayout>
  );
}
