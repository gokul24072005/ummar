import { useState } from "react";
import { Layers, User, Mail, Phone, Building2, FileText, Tag, List, Calendar, X } from "lucide-react";
import { AdminLayout, DataTable, DetailRow } from "@/components/admin";
import { useAdmin } from "@/context/AdminContext";

const STATUS_COLORS = {
  New: "bg-blue-500/10 text-blue-500",
  "In Review": "bg-yellow-500/10 text-yellow-500",
  Completed: "bg-green-500/10 text-green-500",
  Rejected: "bg-red-500/10 text-red-500",
};

const STATUSES = ["New", "In Review", "Completed", "Rejected"];

export default function ServiceRequestManagement() {
  const { serviceRequests, serviceRequestOps } = useAdmin();
  const [selected, setSelected] = useState(null);

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "services", label: "Services" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (v) => (
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[v] ?? "bg-muted text-muted-foreground"}`}>
          {v}
        </span>
      ),
    },
  ];

  const handleClose = () => setSelected(null);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-display text-xl md:text-2xl font-bold">Client Service Requests</h1>
        <p className="text-muted-foreground text-sm mt-1">{serviceRequests.length} total requests</p>
      </div>

      <DataTable
        columns={columns}
        data={[...serviceRequests].reverse()}
        onDelete={(id) => { serviceRequestOps.remove(id); if (selected?.id === id) setSelected(null); }}
        onRowClick={(row) => setSelected(selected?.id === row.id ? null : row)}
        selectedId={selected?.id}
      />

      {/* Centered Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="bg-card border border-border rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border sticky top-0 bg-card z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Layers size={14} className="text-indigo-500" />
                </div>
                <h3 className="font-display font-semibold text-base">Request Details</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[selected.status] ?? "bg-muted text-muted-foreground"}`}>
                  {selected.status}
                </span>
                <button onClick={handleClose} className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="px-5 py-2">
              <DetailRow icon={User} label="Name" value={selected.name} />
              <DetailRow icon={Mail} label="Email" value={selected.email} />
              <DetailRow icon={Phone} label="Phone" value={selected.phone} />
              <DetailRow icon={Building2} label="Company" value={selected.company} />
              <DetailRow icon={Tag} label="Services" value={selected.services} />
              <DetailRow icon={List} label="Sub-Services" value={selected.subServices} />
              <DetailRow icon={FileText} label="Project Details" value={selected.projectDetails} />
              <DetailRow icon={Calendar} label="Date" value={selected.date} />
            </div>

            {/* Status Update */}
            <div className="px-5 py-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Update Status</p>
              <div className="grid grid-cols-2 gap-2">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    onClick={() => { serviceRequestOps.update(selected.id, { status: s }); setSelected((p) => ({ ...p, status: s })); }}
                    className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                      selected.status === s
                        ? STATUS_COLORS[s] + " border-current"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
