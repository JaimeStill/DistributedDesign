using Microsoft.EntityFrameworkCore;

namespace Distributed.Core.Schema;

public interface IEntity
{
    int Id { get; set; }
    string Type { get; }
    string Value { get; set; }
    DateTime DateCreated { get; set; }
    DateTime DateModified { get; set; }

    public void OnSaving(EntityState state);
}