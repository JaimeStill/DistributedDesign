using Distributed.Core.Services;
using Workflows.Contracts;

namespace Workflows.Services;
public interface IPackageEventHub : IEventHub<Package>
{
    Task OnStateChanged(IEventMessage<Package> message);
}