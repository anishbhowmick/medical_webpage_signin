// import { useAuthStore } from '../lib/auth';
// import { LogOut, User, Calendar, FileText, Users, Activity, Stethoscope, Clipboard } from 'lucide-react';

// export function DashboardPage() {
//   const { user, logout } = useAuthStore();

//   const doctorStats = [
//     { name: 'Appointments Today', value: '12', icon: Calendar },
//     { name: 'Active Patients', value: '148', icon: Users },
//     { name: 'Reports Pending', value: '4', icon: FileText },
//   ];

//   const patientStats = [
//     { name: 'Upcoming Appointments', value: '2', icon: Calendar },
//     { name: 'Prescriptions', value: '3', icon: Clipboard },
//     { name: 'Test Results', value: '1', icon: FileText },
//   ];

//   const stats = user?.role === 'doctor' ? doctorStats : patientStats;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Activity className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-semibold text-gray-900">
//                 Healthcare Portal
//               </span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 {user?.role === 'doctor' ? (
//                   <Stethoscope className="h-5 w-5 text-blue-500" />
//                 ) : (
//                   <User className="h-5 w-5 text-green-500" />
//                 )}
//                 <span className="ml-2 text-sm font-medium text-gray-700">
//                   {user?.name}
//                 </span>
//                 <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
//                   {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
//                 </span>
//               </div>
//               <button
//                 onClick={logout}
//                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 hover:text-gray-900"
//               >
//                 <LogOut className="h-4 w-4 mr-2" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <h1 className="text-2xl font-semibold text-gray-900">
//             {user?.role === 'doctor' ? 'Doctor Dashboard' : 'Patient Dashboard'}
//           </h1>
          
//           <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {stats.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.name}
//                   className="bg-white overflow-hidden shadow rounded-lg"
//                 >
//                   <div className="p-5">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0">
//                         <Icon className="h-6 w-6 text-gray-400" />
//                       </div>
//                       <div className="ml-5 w-0 flex-1">
//                         <dl>
//                           <dt className="text-sm font-medium text-gray-500 truncate">
//                             {item.name}
//                           </dt>
//                           <dd className="text-lg font-semibold text-gray-900">
//                             {item.value}
//                           </dd>
//                         </dl>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }